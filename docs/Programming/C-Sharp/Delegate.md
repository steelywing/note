## Delegate

A delegate is a type that represents references to methods with a particular parameter list and return type.

```cs
class Program
{
    // Declaration
    public delegate int DelegateMethod(ref int x);

    public static int Add1(ref int x)
    {
        x += 1;
        return x;
    }

    public static int Multiple2(ref int x)
    {
        x *= 2;
        return x;
    }

    static void Main(string[] args)
    {
        DelegateMethod calculate;
        int x;

        x = 1;
        calculate = Add1;
        calculate?.Invoke(ref x); // 1 + 1 = 2
        Console.WriteLine(x); // 2

        x = 1;
        calculate += Multiple2; // Add other method
        calculate?.Invoke(ref x); // (1 + 1) * 2 = 4
        Console.WriteLine(x); // 4
    }
}
```

- If the delegate has a return value and/or out parameters, it returns the return value and parameters of the last method invoked. 
- Delegate can bind to instance

```cs
class Counter
{
    public int count = 0;

    public void Add()
    {
        count += 1;
    }
}

class Program
{

    // Declaration
    public delegate void DelegateMethod();

    static void Main(string[] args)
    {
        var a = new Counter();
        var b = new Counter();

        // Delegate does not need initialize, can be null
        DelegateMethod method = null;

        method = a.Add;
        // Still can use += even delegate is null
        // method += a.Add;

        // Use ?.Invoke() will check if delegate is null, call null delegate() will throw error
        method?.Invoke();
        Console.WriteLine(a.count); // 1

        method += b.Add;
        method?.Invoke();
        Console.WriteLine($"{a.count} {b.count}"); // 2 1
    }
}
```

Anonymous

```cs
var delegateFunction = delegate()
{
    // ...
    // return ...;
};
```

C# defined delegate

```cs
public delegate void Action();
public delegate void Action<in T>(T obj);
// ...

public delegate TResult Func<out TResult>();
public delegate TResult Func<in T, out TResult>(T arg);
// ...
```

## Lambda

With return value

```cs
Func<int, int> Add1 = (n) => n + 1;
// same as
Func<int, int> Add1 = (n) => { return n + 1; };
```

Without return value

```cs
Action<string> Hi = (name) =>
{
    Console.WriteLine($"Hi, {name}");
};
```
