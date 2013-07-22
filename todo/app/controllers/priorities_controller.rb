class PrioritiesController < ApplicationController
  def index
    @priorities = @auth.priorities
  end

  def create
    color = params[:color]
    name = params[:name]
    value = params[:value]

    priority = Priority.create(:color => color, :name => name, :value => value)
    @auth.priorities << priority

    render :json => priority
  end

  def update
    id = params[:id]

    priority = Priority.find(id)
    priority.update_attributes(params[:priority])

    render :json => priority
  end

end
