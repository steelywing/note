# LDAP sort

PHP `ldap_sort()` is deprecated, this is pure PHP implement

```php
// because PHP usort() cannot iterate using $array['count'], so need implement this quicksort()
function quickSort(&$array, $compare, $start, $end)
{
    $partition = function (&$array, $start, $end) use (&$partition, $compare) {
        if ($start >= $end) {
            return;
        }
        $pivot = $array[$start];
        $left = $start;
        $right = $end;
        while ($left <= $right) {
            while ($compare($array[$left], $pivot) < 0) {
                $left += 1;
            }
            while ($compare($array[$right], $pivot) > 0) {
                $right -= 1;
            }
            if ($left > $right) {
                break;
            }
            list($array[$left], $array[$right]) = [$array[$right], $array[$left]];
            $left += 1;
            $right -= 1;
        }
        $partition($array, $start, $right);
        $partition($array, $left, $end);
    };

    $partition($array, $start, $end);
}


function ldapSort(array &$entries, $key)
{
    $SORT_KEY = 'SortValue';

    $key = strtolower($key);

    for ($i = 0; $i < $entries['count']; $i++) {
        $entry = &$entries[$i];
        $attributes = array_change_key_case($entry, CASE_LOWER);

        $entry[$SORT_KEY] = isset($attributes[$key][0]) ?
            $attributes[$key][0] : null;
    }
    unset($entry);

    quickSort(
        $entries,
        function ($a, $b) use ($SORT_KEY) {
            $a = $a[$SORT_KEY];
            $b = $b[$SORT_KEY];
            if ($a == $b) {
                return 0;
            }
            return ($a < $b) ? -1 : 1;
        },
        0, // start
        $entries['count'] - 1 // end
    );
}
```

```php
$entries = ldap_get_entries($ldap, $result);
ldapSort($entries, 'displayname');
```
