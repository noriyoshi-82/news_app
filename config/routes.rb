Rails.application.routes.draw do
  get 'news/data'
  get 'news/index'
  devise_for :users
end
