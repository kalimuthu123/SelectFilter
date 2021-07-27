import select_filter
import dash
from dash.dependencies import Input, Output
import dash_html_components as html
from datetime import datetime
import dash_core_components as dcc

app = dash.Dash(__name__)

app.layout = html.Div([
    select_filter.SelectFilter(
        id='input',
        value='my-value',
        label='my-label',
        type='custom',
        startDate='2021-01-01',
        endDate='2021-03-21'
    ),
    select_filter.RadioFilter(id="dayinput123",label="show all trnds",initialarray=["Demographic", "Message trends", "calllogs"]),
    select_filter.TimeGrainFilter(id="dayinput",timegrainarray=["1d","7d"]),
    select_filter.DateFilter(id="dayinput345",type="current_month"),
    select_filter.CardDropdown(id="dayinput34455",label="show all Filters",children=[
      dcc.Markdown(
            '''
#### Dash and Markdown

Dash supports [Markdown](http://commonmark.org/help).

Markdown is a simple way to write and format text.
It includes a syntax for things like **bold text** and *italics*,
[links](http://commonmark.org/help), inline `code` snippets, lists,
quotes, and more.
''',
            id='model-{}-markdown'.format(3)
        ),
        dcc.Markdown(
            '''
#### Dash and Markdown

Dash supports [Markdown](http://commonmark.org/help).

Markdown is a simple way to write and format text.
It includes a syntax for things like **bold text** and *italics*,
[links](http://commonmark.org/help), inline `code` snippets, lists,
quotes, and more.
''',
            id='model-{}-markdown'.format(4)
        ),
        dcc.Markdown(
            '',
            id='model-{}-markdown'.format(5)
        ),
    ]),
    html.Div(id='output')
])


@app.callback(Output('output', 'children'), [Input('dayinput', 'value')])
def display_output(value):
    return 'You have entered {}'.format(value)

    #select_filter.DateFilter(id="dayinput123"),

if __name__ == '__main__':
    app.run_server(debug=True)
