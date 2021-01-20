class NewsController < ApplicationController
  def index
  end

  def data
    uri = URI.parse('http://newsapi.org/v2/top-headlines?country=jp&apiKey=ENV['NEWS']')
    son = Net::HTTP.get(uri)
    moments = JSON.perse(json)
    data = moments['articles'].to_json
  end
  
end
