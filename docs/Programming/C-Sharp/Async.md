# Async / Task

- Call `async` method will return a `Task` / `Task<T>`, `<T>` is return value type
  - `Task` == JavaScript `Promise`
  - `async` method run in new thread
- C# `async` method must include `await`, otherwise will run sync
- Use `Task.Delay(<ms>)` to create a delay task
- Call `await <Task>` to wait the `Task` return result
- `Task.CurrentId` == Current task ID
- `Task.Run()` will create new thread
- Call `async` method does not create new thread (like `yield`)

```cs
async static Task<int> AddAsync(int x, int y)
{
    Console.WriteLine("Task Start");
    await Task.Delay(3000);
    Console.WriteLine("Task End");
    return x + y;
}

var task = AddAsync(1, 2);
Thread.Sleep(1000);
Console.WriteLine("Main");
Console.WriteLine("Result = " + await task);
```

```sh
Task Start
# ~ 1000ms
Main
# ~ 2000ms
Task End
Result = 3
```

## Run sync method in `async`

```cs
int x = 1;
// Task.Factory.StartNew(...);
// same as
var task = Task.Run(() =>
{
    Console.WriteLine("Start");
    Thread.Sleep(2000);
    Console.WriteLine("End");
    return x * 2;
});

Thread.Sleep(1000);
Console.WriteLine("Waiting Task");
Console.WriteLine(await task);
```

```sh
Start
# ~ 1000ms
Waiting Task
# ~ 1000ms
End
Result
```

- `Task.Run()` can have return value
- `Task.Run()` `Func` can not have parameter

## Task

```cs
// Create a task but do not start it
var task = new Task(() => "Task");

// Start task
task.Start();

// Wait the task finish
task.Wait();

// Wait the task 1000ms, return true if finish
var finished = task.Wait(1000);
```

## Cancellation Token

- `CancellationToken` is like a `bool`, let `asyn` method to know if cancellation requested
- Cancellation request need to be set using `CancellationTokenSource.Cancel()`, `CancellationToken` cannot request cancellation
- Most of C# `async` method support
- You need handle `CancellationToken` by yourself in your method

```cs
async static Task LoopAsync(int seconds, CancellationToken ct)
{
    for (int i = 0; i < seconds; i += 1)
    {
        if (ct.IsCancellationRequested)
            break;
        Console.WriteLine($"Loop {i}");
        await Task.Delay(1000, ct);
    }
}

var cts = new CancellationTokenSource();

// Loop 100 seconds
var task = LoopAsync(100, cts.Token);

Thread.Sleep(10 * 1000);
// Cancel after 10 seconds
cts.Cancel();
```

```sh
Loop 0
Loop 1
Loop 2
Loop 3
Loop 4
Loop 5
Loop 6
Loop 7
Loop 8
Loop 9
```

### Cancel after a time

```cs
var cts = new CancellationTokenSource();
cts.
```
