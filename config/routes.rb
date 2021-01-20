Rails.application.routes.draw do
  get 'news/index'
  devise_for :users
  root to: "news#index"
end
