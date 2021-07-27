# AUTO GENERATED FILE - DO NOT EDIT

export ''_datefilter

"""
    ''_datefilter(;kwargs...)

A DateFilter component.
DateFilter is an example component.
It takes a property, `label`, and
displays it.
It renders an input with the property `value`
which is editable by the user.
Keyword arguments:
- `id` (String; optional): The ID used to identify this component in Dash callbacks.
- `label` (String; optional): A label that will be printed when this component is rendered.
- `value` (Bool | Real | String | Dict | Array; optional): The value displayed in the input.
- `initialdate` (Bool | Real | String | Dict | Array; optional): The Date displayed in the input.
- `startDate` (Bool | Real | String | Dict | Array; optional): The startDate of dateformat in the input.
- `type` (Bool | Real | String | Dict | Array; optional): The startDate of dateformat in the input.
- `endDate` (Bool | Real | String | Dict | Array; optional): The startDate of dateformat in the input.
- `classes` (Dict; optional): The classes displayed in the component.
"""
function ''_datefilter(; kwargs...)
        available_props = Symbol[:id, :label, :value, :initialdate, :startDate, :type, :endDate, :classes]
        wild_props = Symbol[]
        return Component("''_datefilter", "DateFilter", "select_filter", available_props, wild_props; kwargs...)
end

