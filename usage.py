import select_filter
import dash
from dash.dependencies import Input, Output
import dash_html_components as html
from datetime import datetime

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
    select_filter.RadioFilter(id="dayinput123",initialarray=["Instagram", "LinkedIn", "Twitter"]),
    select_filter.TimeGrainFilter(id="dayinput",timegrainarray=["1d","7d"]),
    select_filter.DateFilter(id="dayinput345"),
    html.Div(id='output')
])


@app.callback(Output('output', 'children'), [Input('dayinput123', 'value')])
def display_output(value):
    return 'You have entered {}'.format(value)

    #select_filter.DateFilter(id="dayinput123"),

if __name__ == '__main__':
    app.run_server(debug=True)
