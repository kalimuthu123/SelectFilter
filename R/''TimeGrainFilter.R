# AUTO GENERATED FILE - DO NOT EDIT

''TimeGrainFilter <- function(id=NULL, label=NULL, value=NULL, timegrainarray=NULL, classes=NULL) {
    
    props <- list(id=id, label=label, value=value, timegrainarray=timegrainarray, classes=classes)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'TimeGrainFilter',
        namespace = 'select_filter',
        propNames = c('id', 'label', 'value', 'timegrainarray', 'classes'),
        package = 'selectFilter'
        )

    structure(component, class = c('dash_component', 'list'))
}
