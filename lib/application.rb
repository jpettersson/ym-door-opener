require 'sinatra/base'
require 'haml'

class Application < Sinatra::Base
  get '/' do
    haml :index
  end

  post '/' do
    open_door
    haml :index
  end

  def open_door
    puts "Open door now!"
  end
end
