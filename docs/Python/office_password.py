import io
import os
import sys
import msoffcrypto

def check_password(file, passwords):
    encrypted_file = None
    decrypted_file = None
    try:
        encrypted_file = open(file, 'rb')
        file = msoffcrypto.OfficeFile(encrypted_file)
        decrypted_file = io.BytesIO()
        print("")
        count = 0
        for password in passwords:
            count += 1
            password = password.strip("\r\n")
            print("\033[F\033[K", "[{}] '{}'".format(count, password), sep='', flush=True)
            try:
                file.load_key(password=password)
                file.decrypt(decrypted_file)
            except:
                continue
            return password
    finally:
        if isinstance(encrypted_file, io.IOBase):
            encrypted_file.close()

        if isinstance(decrypted_file, io.IOBase):
            decrypted_file.close()
    
    return None


if __name__ == '__main__':
    if len(sys.argv) < 3:
        print('Usage:')
        print("\t", os.path.basename(sys.argv[0]), '<office file> <password file>')
        exit()

    with open(sys.argv[2]) as passwords:
        print('Checking password...')
        password = check_password(sys.argv[1], passwords)
        if password:
            print("Password found: '{}'".format(password))
        else:
            print("Password not found")
