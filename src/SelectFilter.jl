
module SelectFilter
using Dash

const resources_path = realpath(joinpath( @__DIR__, "..", "deps"))
const version = "0.0.8"

include("''_carddropdown.jl")
include("''_datefilter.jl")
include("''_radiofilter.jl")
include("''_selectfilter.jl")
include("''_timegrainfilter.jl")

function __init__()
    DashBase.register_package(
        DashBase.ResourcePkg(
            "select_filter",
            resources_path,
            version = version,
            [
                DashBase.Resource(
    relative_package_path = "select_filter.min.js",
    external_url = nothing,
    dynamic = nothing,
    async = nothing,
    type = :js
),
DashBase.Resource(
    relative_package_path = "select_filter.min.js.map",
    external_url = nothing,
    dynamic = true,
    async = nothing,
    type = :js
)
            ]
        )

    )
end
end
