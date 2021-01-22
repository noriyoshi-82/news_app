class NewsController < ApplicationController
  def index
  end

  def data
    uri = URI.parse("http://newsapi.org/v2/top-headlines?country=jp&apiKey=ENV['NEWS_KEY']")
    json = Net::HTTP.get(uri)
    moments = JSON.parse(json)
    @data = moments['articles'].to_json
  end
  
end
