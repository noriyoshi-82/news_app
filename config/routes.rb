Rails.application.routes.draw do
  devise_for :users
  root "news#index"
  get 'news/data'
  get 'news/index'
  get 'news/show'
end
