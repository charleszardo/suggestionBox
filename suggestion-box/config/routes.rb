Rails.application.routes.draw do
  root "suggestions#index"

  resources :users

  resource :session, only: [:new, :create]
  resources :sessions, only: [:destroy]

  resources :suggestions do
    resources :votes, only: [:create]
  end

  resources :comments, only: [:create]
end
