## Common

> [Reference](https://docs.blender.org/manual/en/3.0/interface/keymap/blender_default.html)

| Key | Operation | Description |
|-|-|-|
| <kbd>G</kbd> | Grab |
| <kbd>R</kbd> | Rotate |
| <kbd>MMB</kbd> | Rotate View |
| <kbd>LMB</kbd> | Select |
| <kbd>Tab</kbd> | Toggle Edit Mode |
| <kbd>&#96;</kbd> | Pie Menu (View) |
| <kbd>Shift + &#96;</kbd> | Fly mode |
| <kbd>Shift + MMB</kbd> | Pan View |
| <kbd>Shift + A</kbd> | Add |
| <kbd>Z</kbd> | Shading Mode |
| <kbd>F3</kbd> | Search Menu |
| <kbd>O</kbd> | Toggle Proportional Editing |
| <kbd>Alt + Z</kbd> | X-Ray Mode |
| <kbd>F2</kbd> | Rename |
| <kbd>H</kbd> | Hide |
| <kbd>Alt + H</kbd> | Un-hide |
| <kbd>T</kbd> | Toggle Toolbar |
| <kbd>N</kbd> | Toggle Sidebar |
| <kbd>Num0</kbd> | Camera View |
|  | De-noise |
|  | Sub-surface | 內部透射（皮膚） |
|  | Topology: Quads > Triangles |
|  | Bridge Edge Loops | Auto fill faces in 2 edge loops |
|  | Material > Roughness | 硬度 |
|  | Material > Transmission | 透射 |
| <kbd>Shift + E</kbd> | Edge Crease | Sub-division Weight |
| Hold <kbd>Alt</kbd> <br/> when change property | Apply to all selected object |
| Hold <kbd>Alt</kbd> or <kbd>Shift</kbd> then drag select input property | Change multiple property |

### View face normal / orientation

- 3D Viewport
  - Viewport Overlays
    - Face Orientation
- Blue: Front face 
- Red: Back face
- Need to disable X-Ray

### View armature local axes

- Select armature
- Object Data Properties
  - Viewport Display
    - Axes

## Object Mode

| Key | Operation | Description |
|-|-|-|
| <kbd>M</kbd> | Move to Collection |
| <kbd>Ctrl + Alt + Num0</kbd> | Current View as Camera View |
| <kbd>Ctrl + A</kbd> | Apply Transform | Apply object transform to Vertex / Edge / Face |

## Edit Mode

| Key | Operation | Description |
|-|-|-|
| <kbd>1</kbd> | Vertex Mode |
| <kbd>2</kbd> | Edge Mode |
| <kbd>3</kbd> | Face Mode |
| <kbd>GG</kbd> | Edge Slide |
| <kbd>Ctrl + L</kbd> | Select Linked |
| <kbd>P</kbd> | Separate | Separate to new object |
| <kbd>Shift + N</kbd> | Recalculate Outside | Recalculate Face Normal |

### Armature Weight Paint

- Select armature
- <kbd>Shift</kbd> + <code>select mesh</code>
- <kbd>Ctrl + Tab</kbd> Weight Paint
- <kbd>Ctrl</kbd> + <code>select bone</code>

### Recalculate Weight

- In weight paint
- <kbd>Ctrl</kbd> + <code>select bone</code>
- <kbd>F3</kbd> <code>Assign from Bone Envelopes</code> / <code>Assign Automatic from Bones</code>
