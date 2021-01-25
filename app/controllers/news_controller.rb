class NewsController < ApplicationController
  def index
  end

  def data
    api = ENV['NEWS_KEY']
    uri = URI.parse("http://newsapi.org/v2/top-headlines?country=jp&apiKey=#{api}")
    json = Net::HTTP.get(uri)
    moments = JSON.parse(json)
    @data = moments['articles'].to_json
  end
  
end