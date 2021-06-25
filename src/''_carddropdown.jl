# AUTO GENERATED FILE - DO NOT EDIT

export ''_carddropdown

"""
    ''_carddropdown(;kwargs...)
    ''_carddropdown(children::Any;kwargs...)
    ''_carddropdown(children_maker::Function;kwargs...)


A CardDropdown component.
ExampleComponent is an example component.
It takes a property, `label`, and
displays it.
It renders an input with the property `value`
which is editable by the user.
Keyword arguments:
- `children` (a list of or a singular dash component, string or number; optional): The children components displayed inside the grid.
- `id` (String; optional): The ID used to identify this component in Dash callbacks.
- `label` (String; optional): A label that will be printed when this component is rendered.
- `value` (Bool | Real | String | Dict | Array; optional): The value displayed in the input.
- `classes` (Dict; optional): The classes displayed in the component.
"""
function ''_carddropdown(; kwargs...)
        available_props = Symbol[:children, :id, :label, :value, :classes]
        wild_props = Symbol[]
        return Component("''_carddropdown", "CardDropdown", "select_filter", available_props, wild_props; kwargs...)
end

''_carddropdown(children::Any; kwargs...) = ''_carddropdown(;kwargs..., children = children)
''_carddropdown(children_maker::Function; kwargs...) = ''_carddropdown(children_maker(); kwargs...)

