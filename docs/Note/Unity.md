# Unity

`Monobehaviours` doesn't use constructor

[Reference](http://ilkinulas.github.io/development/unity/2016/05/30/monobehaviour-constructor.html)

Use `Awake()` / `Start()`

| Name | Description |
|-|-|
| Vertex / Vertices / Point | 點 |
| Edge / Line | 線 |
| Face | 面 |
| Mesh / Polygon | 多面體，Vertex / Edge / Face 的集 |
| Concave | 由 Face 組成的多面體 |
| Convex | 由 Vertex 組成的多面體 |

## Execution Order

[Reference](https://docs.unity3d.com/Manual/ExecutionOrder.html)

![Flow Chart](./img/monobehaviour_flowchart.svg)

## `GameObject`

- `GameObject` is containers for `Component`
- `GameObject` always has `Transform`, cannot remove

## `Component`

- `Transform`, `Mesh`, `Light`, `Camera`, ... is `Component`

## `Prefab`

- Template for collection of `GameObject` with property
- Can keep property in different scene
- Can be instantiate
- Can be override property in different instance
