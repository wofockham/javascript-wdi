class PrioritiesController < ApplicationController
  def index
    @priorities = @auth.priorities
  end

  def create
    color = params[:color]
    name = params[:name]
    value = params[:value]

    # Fancy pants way for jerks:
    # @auth.priorities.create(:color => color, :name => name, :value => value) # I can't believe this really works

    priority = Priority.create(:color => color, :name => name, :value => value)
    @auth.priorities << priority
  end
end
