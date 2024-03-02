---
date: 2024-02-19
tags: [CSS, Print]
---

# Fix CSS no margin when print

<!--truncate-->

Wrap it in another `<div>` with a `padding` will fix the issue

```html
<div style="padding: 1px;">
    <div style="page-break-after: always;">
        Fix with extra container
    </div>
</div>
```

Demo

```html
<html>

<head>
    <style>
        div {
            border-radius: 1rem;
        }

        .section {
            box-sizing: border-box;
            color: white;
            padding: 2rem;
            margin: 40px auto;
            height: 60%;
            width: 60%;
            page-break-after: always;
        }
    </style>
</head>

<body style="background-color: #999; height: 100%;">
    <div style="background-color: #fff; padding: 1rem; width: 80%; margin: 0 auto;">
        <div class="section" style="background-color: green;">
            Page 1
        </div>
        <div style="padding: 1px;">
            <div class="section" style="background-color: blue;">
                Page 2 with extra container
            </div>
        </div>
        <div class="section" style="background-color: red;">
            Page 3
        </div>
    </div>
</body>

</html>
```
