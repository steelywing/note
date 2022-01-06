## NameSpace

命名空間，用來組織/分隔命名，可以防止命名 conflict

```cs
namespace NameSpace
{
    // ...
}
```

直接使用 `namespace` 命名空間裡的 class
```cs
using System;
Console.WriteLine("Hello, World!");
// same as
System.Console.WriteLine("Hello, World!");
```

用 `Generic` (Alias) 來存取 `System.Collections.Generic` 命名空間
```cs
using Generic = System.Collections.Generic;
new Generic::Dictionary<string, int>();
```

全域命名空間 (Global / Top Level Name Space)

```cs
global::
```

巢狀

```cs
// N1
namespace N1
{
    // N1.C1
    class C1
    {
        // N1.C1.C2
        class C2
        {
        }
    }
    // N1.N2
    namespace N2
    {
        // N1.N2.C2
        class C2
        {
        }
    }
}
```
