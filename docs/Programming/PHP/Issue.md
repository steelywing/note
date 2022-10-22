# PHP issue

## Fix parse chinese CSV

```php
setlocale(LC_CTYPE, "zh.UTF-8");
```

```php
setlocale(LC_CTYPE, "C");
```
