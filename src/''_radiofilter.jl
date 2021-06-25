# AUTO GENERATED FILE - DO NOT EDIT

export ''_radiofilter

"""
    ''_radiofilter(;kwargs...)

A RadioFilter component.
ExampleComponent is an example component.
It takes a property, `label`, and
displays it.
It renders an input with the property `value`
which is editable by the user.
Keyword arguments:
- `id` (String; optional): The ID used to identify this component in Dash callbacks.
- `label` (String; optional): A label that will be printed when this component is rendered.
- `value` (Bool | Real | String | Dict | Array; optional): The value displayed in the input.
- `initialarray` (Bool | Real | String | Dict | Array; optional): The type of dateformat in the input.
- `classes` (Dict; optional): The classes displayed in the component.
"""
function ''_radiofilter(; kwargs...)
        available_props = Symbol[:id, :label, :value, :initialarray, :classes]
        wild_props = Symbol[]
        return Component("''_radiofilter", "RadioFilter", "select_filter", available_props, wild_props; kwargs...)
end

