# FortiGate deep inspection

## Deep Inspection without SSL/TLS offload

Import the Web Server TLS certificate

- In **System** > **Certificates**
- Import **Certificate** and **Key**

Create inspection profile

- In **Security Profiles** > **SSL/SSH Inspection**
- Click **Create New**
- Set **Name** to **HTTPS Deep Inspection**
- Set **Enable SSL inspection of** to **Protecting SSL Server**
- Set **Server certificate** to the imported certificate
- Enable **HTTPS** in **Protocol Port Mapping**
- Click **OK**

:::info

If the certificate / key is not correct, FortiGate cannot decrypt the content, then FortiGate just pass the traffic

:::

Enable IPS in policy

- In **Policy & Objects**
- Edit the port forward policy
- Enable **IPS**
- Set **SSL Inspection** to **HTTPS Deep Inspection**

## Testing IPS

Add Eicar signature

- In **Security Profiles** > **Intrusion Prevention**
- Edit profile
- Click **Create New**
- Set **Type** to **Signature**
- Set **Action** to **Block**
- Search **Eicar**
- Add **Eicar.Virus.Test.File**
- Click **OK**

Trigger IPS

- Download [Eicar test file](https://www.eicar.org/download-anti-malware-testfile/)

``` title="eicar.com.txt"
X5O!P%@AP[4\PZX54(P^)7CC)7}$EICAR-STANDARD-ANTIVIRUS-TEST-FILE!$H+H*
```

- Upload the Eicar test file to web server
- Open the Eicar test file URL in browser to trigger IPS

Check the log

- See in **Log & Report** > **Intrusion Prevention**
