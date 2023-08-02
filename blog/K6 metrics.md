---
date: 2022-12-16
tags: [K6, Stress Test]
---

# K6 metrics

> [Official Web](https://k6.io/)

Explain K6 metrics

<!--truncate-->

<table className="text-center">
<tbody>
    <tr>
        <td colSpan="6">iteration_duration</td>
    </tr>
    <tr>
        <td colSpan="6"><code>http_req_*</code></td>
    </tr>
    <tr>
        <td colSpan="3"></td>
        <td colSpan="3">duration</td>
    </tr>
    <tr>
        <td>blocked</td>
        <td>connecting</td>
        <td>tls_handshaking</td>
        <td>sending</td>
        <td>waiting</td>
        <td>receiving</td>
    </tr>
</tbody>
</table>

- Unit: ms

Metric | Description
-|-
blocked | wait TCP slot
connecting | establish TCP
waiting | TTFB (Time To First Byte)
