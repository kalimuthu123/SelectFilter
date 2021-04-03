# AUTO GENERATED FILE - DO NOT EDIT

''SelectFilter <- function(id=NULL, label=NULL, value=NULL, classes=NULL) {
    
    props <- list(id=id, label=label, value=value, classes=classes)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'SelectFilter',
        namespace = 'select_filter',
        propNames = c('id', 'label', 'value', 'classes'),
        package = 'selectFilter'
        )

    structure(component, class = c('dash_component', 'list'))
}
