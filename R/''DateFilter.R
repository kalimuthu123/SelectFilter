# AUTO GENERATED FILE - DO NOT EDIT

''DateFilter <- function(id=NULL, label=NULL, value=NULL, initialdate=NULL, startDate=NULL, type=NULL, endDate=NULL, classes=NULL) {
    
    props <- list(id=id, label=label, value=value, initialdate=initialdate, startDate=startDate, type=type, endDate=endDate, classes=classes)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'DateFilter',
        namespace = 'select_filter',
        propNames = c('id', 'label', 'value', 'initialdate', 'startDate', 'type', 'endDate', 'classes'),
        package = 'selectFilter'
        )

    structure(component, class = c('dash_component', 'list'))
}
