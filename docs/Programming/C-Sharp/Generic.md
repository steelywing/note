# Generic

## Generic Methods

> [Ref](https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/generics/generic-methods)

```cs
void Swap<T>(ref T lhs, ref T rhs)
{
    T temp;
    temp = lhs;
    lhs = rhs;
    rhs = temp;
}

int a = 1
int b = 2
Swap<int>(ref a, ref b)
// a = 2, b = 1

// same as
Swap(ref a, ref b)
```

可以限制 `<T>` 的 Base Class

```cs
T Max<T>(T lhs, T rhs) where T : System.IComparable<T>
{
    if (lhs.CompareTo(rhs) > 0)
    {
        return lhs;
    }
    else 
    {
        return rhs;
    }
}
```

## Generic Class

> [Ref](https://docs.microsoft.com/en-us/dotnet/csharp/fundamentals/types/generics)

Generic Class 使用比較少，因為 .NET 自帶的 Generic Class (`List`, `Set`, ...) 已很實用，除非要有特別實作需求 (`Serializable` 之類) 才會用到

