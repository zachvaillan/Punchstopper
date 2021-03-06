Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api, defaults: { format: :json } do 
    resources :users, only: [ :index, :create, :show ] 
    resources :projects, only: [ :create, :index, :update, :show ]
    resources :rewards, only: [ :create ]
    resources :backs, only: [ :create ]
    resource :session
    resources :projects, path: '/projectsin/:category', only: [ :index ]
  end

  root to: "static_pages#root"
end
