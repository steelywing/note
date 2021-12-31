# Godot

| Name | Description |
|-|-|
| Vertex / Vertices / Point | 點 |
| Edge / Line | 線 |
| Face | 面 |
| Mesh / Polygon | 多面體，Vertex / Edge / Face 的集 |
| Concave | 由 Face 組成的多面體 |
| Convex | 由 Vertex 組成的多面體 |

## Cons

- Node structure (Not ECS)
- Rigid / Kinematic / Static is separate, and some common method is missing
- 3D Physics method not complete
- `PhysicsDirectBodyState` is singleton !?
- `PhysicalBone` does not have velocity method
- `PhysicsBody` transform does not sync with `PhysicsServer`
- Lack physics doc

## Joint

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