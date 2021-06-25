# AUTO GENERATED FILE - DO NOT EDIT

''CardDropdown <- function(children=NULL, id=NULL, label=NULL, value=NULL, classes=NULL) {
    
    props <- list(children=children, id=id, label=label, value=value, classes=classes)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'CardDropdown',
        namespace = 'select_filter',
        propNames = c('children', 'id', 'label', 'value', 'classes'),
        package = 'selectFilter'
        )

    structure(component, class = c('dash_component', 'list'))
}
