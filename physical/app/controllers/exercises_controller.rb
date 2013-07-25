class ExercisesController < ApplicationController
  before_filter :only_authorized

  def index
    @exercises = @auth.exercises
  end

  private
  def only_authorized
    redirect_to(root_path) if @auth.nil?
  end
end