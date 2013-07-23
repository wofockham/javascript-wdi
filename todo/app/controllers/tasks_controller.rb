class TasksController < ApplicationController
  before_filter :ensure_logged_in

  def index
    @tasks = @auth.tasks
  end

  def create
    task = Task.create(params[:task])
    render :json => task
  end
end
