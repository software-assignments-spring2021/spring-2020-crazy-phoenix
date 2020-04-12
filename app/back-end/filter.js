// list of accessible stations
// only compares the initial n-length of string
const manhattan = [
  '14 St', '14 St-Union Square', '23 St', '28 St', '34 St - Herald Square', '34 St - Penn Station',
  '34 St - Hudson Yards', '42 St - Port Authority Bus Terminal', '47 - 50 Sts - Rockefeller Ctr',
  '49 St', '50 St', '51 St', '59 St-Columbus Circle', '66 St - Lincoln Center', '72 St', '86 St', '96 St',
  '125 St', '135 St', '168 St', '175 St', 'Bowling Green', 'Broadway-Lafayette St / Bleecker St',
  'Brooklyn Bridge - City Hall', 'Canal St', 'Chambers St', 'Cortlandt St', 'Dyckman St', 'Fulton St',
  'Grand Central - 42 St', 'Inwood - 207 St', 'Lexington Av / 53 rd St', 'Lexington Av / 63 St', 'Roosevelt Island',
  'South Ferry', 'Times Square - 42 St', 'West 4 St', 'World Trade Center', 'WTC Cortlandt'
];
const bronx = [
  '3 Av - 149 St', '161 St - Yankee Stadium', '231 St', '233 St', 'E 180 Street', 'Fordham Rd',
  'Gun Hill Rd - White Plains Rd line', 'Hunts Point Av', 'Kingsbridge Rd', 'Pelham Bay Park',
  'Pelham Parkway - White Plains Rd line', 'Simpson St'
];
const brooklyn = [
  '8 Av', '62 St / New Utrecht Av', 'Atlantic Avenue / Barkclays Center / 4 Avenue', 'Avenue H', 'Bay Parkway',
  'Borough Hall', 'Canarsie - Rockaway Parkway', 'Church Av', 'Coney Island - Stillwell Av', 'Crown Hts - Utica Av',
  'Dekalb Av', 'Euclid Av', 'Flatbush Av - Brooklyn College', 'Flushing Av', 'Franklin Av', 'Jay St - Metro Tech',
  'Kings Highway', 'Marcy Avenue', 'Myrtle - Wyckoff Avenues', 'Park Place', 'Prospect Park', 'Utica Av', 'Wilson Av'
];
const queens = [
  '21 St - Queensbridge', '61 St - Woodside', 'Aqueduct Racetrack', 'Court Sq', 'Far Rockaway - Mott Av',
  'Flushing / Main St', 'Forest Hills - 71 Avenue', 'Howard Beach - JFK Airport', 'Jackson Hts - Roosevelt Av',
  'Jamaica - 179 St', 'Jamaica Center / Parsons - Archer', 'Jamaica - Van Wyck', 'Junction Blvd',
  'Kew Gardens - Union Turnpike', 'Middle Village - Metropolitan Av', 'Ozone Park - Lefferts Blvd', 'Queens Plaza',
  'Rockaway Park - Beach 116 St', 'Sutphin Blvd - Archer Av / JFK Airport'
];
