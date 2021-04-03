# AUTO GENERATED FILE - DO NOT EDIT

export ''_selectfilter

"""
    ''_selectfilter(;kwargs...)

A SelectFilter component.
ExampleComponent is an example component.
It takes a property, `label`, and
displays it.
It renders an input with the property `value`
which is editable by the user.
Keyword arguments:
- `id` (String; optional): The ID used to identify this component in Dash callbacks.
- `label` (String; optional): A label that will be printed when this component is rendered.
- `value` (Bool | Real | String | Dict | Array; optional): The value displayed in the input.
- `classes` (Dict; optional)
"""
function ''_selectfilter(; kwargs...)
        available_props = Symbol[:id, :label, :value, :classes]
        wild_props = Symbol[]
        return Component("''_selectfilter", "SelectFilter", "select_filter", available_props, wild_props; kwargs...)
end

