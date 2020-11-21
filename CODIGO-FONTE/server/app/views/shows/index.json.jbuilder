json.data @shows do |show|
  json.id show.id
  json.title show.title
  json.description show.description
  json.price show.price
  json.troupe show.troupe
end
