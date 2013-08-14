class PostsController < ApplicationController

  respond_to :html, :json

  def index
    @posts = Post.select([:title, :slug])
    respond_with(@posts)
  end

  def show
    @post = Post.find(params[:id])
    respond_with(@post)
  end

end