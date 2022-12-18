# Godot

| Name | Description |
|-|-|
| Vertex / Vertices / Point | 點 |
| Edge / Line | 線 |
| Face | 面 |
| Mesh / Polygon | 多面體，Vertex / Edge / Face 的集 |
| Concave | 由 Face 組成的多面體 |
| Convex | 由 Vertex 組成的多面體 |
| Magnitude | Vector Length / 向量的長度 |

## Cons

- Node structure (Not ECS)
- Rigid / Kinematic / Static is separate, and some common method is missing
- 3D Physics method not complete
- `PhysicsDirectBodyState` is singleton !?
- `PhysicalBone` does not have velocity method
- `PhysicsBody` transform does not sync with `PhysicsServer`
- Lack physics doc

## Joint

- Will use `node.GlobalTransform.origin` - `joint.GlobalTransform.origin` as anchor point

```
# Reference: bullet\BulletDynamics\ConstraintSolver\btGeneric6DofConstraint.cpp

Impulse = LimitSoftness * (Restitution * Depth / TimeStep - Damping * RelativeVelocity) * jacDiagABInv;
```

### Pin Joint

- 保持 **固定距離**，**固定距離** = 建立 Pin Joint 時的距離
- Damping (阻尼)：和 **固定距離** 越近時，引力的相反方向作用力，> 1 會使 相反方向作用力 > 引力
- Impulse Clamp：最大引力

## Singleton

> [Reference](https://docs.godotengine.org/en/stable/getting_started/step_by_step/singletons_autoload.html)

- **Project** ▶ **Project Settings** ▶ **Autoload**
  - Can be class (`.cs` / `.gd`) or scene (`.tscn`)
  - Class must inherit from `Godot.Node`
  - Class will be instanced and add to `root`
- Run flow
  - Autoload
  - Main scene

```cs
using Godot;
using System;

public class Global : Godot.Node
{
    public override void _Ready()
    {
        // CurrentScene
        // Viewport root = GetTree().GetRoot();
        // root.GetChild(root.GetChildCount() - 1);
    }
}
```

## Editor 3D Navigation

- Hold `RMB` / <kbd>Shift + F</kbd> to enter fly mode
  - <kbd>W</kbd> <kbd>S</kbd> <kbd>A</kbd> <kbd>D</kbd> to move forward / back / left / right
  - <kbd>E</kbd> <kbd>Q</kbd> to move up / down
  - <kbd>Shift</kbd> <kbd>Alt</kbd> to speed up / down
- `MMB` to rotate

## Unhandled Exception Policy

Do not terminate application on unhandled exception

- **Project Settings**
  - **Mono**
    - **Unhandled Exception Policy**

## Dot Product

- `A`, `B` is `Vector3`
- `Dot(A, B)` return `float`
- `Dot(A, B)` 可用於計算 A, B 的角度
  - &gt; 0 時角度 &lt; 90
  - = 0 時角度 = 90
  - &lt; 0 時角度 &gt; 90
- `Dot(A, B) = A.X * B.X + A.Y * B.Y + A.Z * B.Z`
- `Dot(A, B) = (A.Length * B.Length) * Cos(A.AngleTo(B))`
- `A.AngleTo(B) = ACos(Dot(A, B) / (A.Length * B.Length))`
  - If `A` and `B` normalized
    - `A.AngleTo(B) = ACos(Dot(A, B))`

## Cross Product

- `A`, `B` is `Vector3`
- `Cross(A, B)` return `Vector3`
- `Cross(A, B)` 垂直於 `A`, `B` 這個平面
- `Cross(A, B)` = `-Cross(B, A)`
- 可用於計算 Torque (扭力)

## `Mathf`

```cs
// Pseudo Code
float Clamp(float value, float min, float max)
{
  if (value < min) return min;
  if (value > max) return max;
  return value;
}
```

```cs
// Pseudo Code
float Wrap(float value, float min, float max)
{
  float range = (max - min);
  if (value >= max) 
    return Wrap(value - range, min, max);
  if (value <= min)
    return Wrap(value + range, min, max);
  return value;
}
```

## Physics

- Only change physics related properties (Velocity) in `_integrate_forces()`
  - [Reference](https://docs.godotengine.org/en/stable/tutorials/physics/physics_introduction.html)
  - Use `PhysicsDirectBodyState.step` to get `delta`
  - `GetCollidingBodies()` use much CPU

## FPS

```cs
// FPS
Engine.TargetFps

// Physics FPS
Engine.IterationsPerSecond
```

## Input

```cs
// Input.IsActionJustPressed() can be used in _PhysicsProcess() / _Process()
// Godot will auto detect
public override void _PhysicsProcess(float delta)
{
    Input.IsActionJustPressed();
}

public override void _Process(float delta)
{
    Input.IsActionJustPressed();
}
```

> Ref: `input.cpp`
