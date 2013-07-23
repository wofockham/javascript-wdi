class TasksController < ApplicationController
  before_filter :ensure_logged_in

  def index
    @tasks = @auth.tasks.joins(:priority).order('tasks.is_complete ASC').order('priorities.value ASC').order('tasks.title ASC')
  end

  def create
    task = Task.create(params[:task])
    @auth.tasks << task

    render :json => task.as_json(:include => :priority)
  end

  def update
    task = Task.find(params[:id])
    task.update_attributes(params[:task])

    render :json => task.as_json(:include => :priority)
  end
end
