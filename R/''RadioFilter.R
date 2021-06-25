# AUTO GENERATED FILE - DO NOT EDIT

''RadioFilter <- function(id=NULL, label=NULL, value=NULL, initialarray=NULL, classes=NULL) {
    
    props <- list(id=id, label=label, value=value, initialarray=initialarray, classes=classes)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'RadioFilter',
        namespace = 'select_filter',
        propNames = c('id', 'label', 'value', 'initialarray', 'classes'),
        package = 'selectFilter'
        )

    structure(component, class = c('dash_component', 'list'))
}
