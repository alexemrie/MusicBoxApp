Rails.application.routes.draw do
  root 'welcome#index'
  get '/welcome/search' => 'welcome#search'
end
