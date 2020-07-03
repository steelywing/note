#!/bin/sh

# Dovecot maildir compression
# Based on https://gist.github.com/cs278/1490556
# Fixed some bug and compatibility
# https://doc.dovecot.org/configuration_manual/zlib_plugin/

if [ $# -eq 0 ]; then
	echo "Compress path and sub directory email"
	echo "Usage: $(basename $0) <path>"
	exit 0
fi

maildirlock="/usr/lib/dovecot/maildirlock"
find_expression="-mtime +30 -size +1M"
compress=gzip
#compress=bzip2

find "$@" -type d -name "cur" | while read -r maildir; do
	maildir=$(readlink -f "$maildir")
	tmpdir="$maildir/../tmp"
	if [ ! -d "$tmpdir" ]; then
		echo "tmp directory ($tmpdir) not found"
		exit 1
	fi
	echo "Processing $maildir"
	# echo mail dir: $maildir
	# echo tmp dir: $tmpdir
	find=$(find "$maildir" $find_expression -type f -name "*,S=*" ! -name "*,*:2,*,*Z*" -printf "%f\n")

	if [ -z "$find" ]; then
		continue
	fi

	echo "$find" | while read -r filename; do
		srcfile="$maildir/$filename"
		tmpfile="$tmpdir/$filename"

		$compress --best --stdout "$srcfile" > "$tmpfile" &&

		# Copy over some things
		chown --reference="$srcfile" "$tmpfile" &&
		chmod --reference="$srcfile" "$tmpfile" &&
		touch --reference="$srcfile" "$tmpfile"
	done

	if lock=$("$maildirlock" "$maildir/.." 10); then
		original_size=$(du -sh "$maildir" | awk '{print $1}')

		echo "$find" | while read -r filename; do
			flags=$(echo $filename | awk -F:2, '{print $2}')

			if echo $flags | grep ','; then
				newname="$filename"Z
			else
				newname="$filename",Z
			fi

			srcfile="$maildir/$filename"
			tmpfile="$tmpdir/$filename"
			dstfile="$maildir/$newname"

			if [ -f "$srcfile" ] && [ -f "$tmpfile" ]; then
				echo "$filename"
				echo "  -> $newname"

				mv "$tmpfile" "$srcfile" &&
				mv "$srcfile" "$dstfile"
			else
				rm -f "$tmpfile"
			fi
		done

		kill -s TERM $lock

		current_size=$(du -sh "$maildir" | awk '{print $1}')
		echo "Directory size: $original_size => $current_size"
	else
		echo "Failed to lock: $maildir" >&2

		echo "$find" | while read filename; do
			rm -f "$tmpdir/$filename"
		done
	fi
done
