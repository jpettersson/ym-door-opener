require 'sinatra/base'
require 'haml'
require 'lakrits'
require 'sass'
require 'compass'

Lakrits::Log.level = Lakrits::Log::WARNING
$lakrits = Lakrits.new

class Application < Sinatra::Base

  configure do
    Compass.configuration do |config|
      config.project_path = File.dirname(__FILE__)
      config.sass_dir = 'assets'
    end

    set :haml, { :format => :html5 }
    set :scss, Compass.sass_engine_options
  end

  get '/' do
    haml :index
  end

  post '/' do
    open_door
    haml :index
  end

  def open_door
    puts "Opening door.."
    msg = { 
      :recipient_id => 2,  # The hard coded ID of the door opener Arduino.
      :message_type => 1,  # Sending an open command
      :data => [30]       # The duration of the 'button press' in multiples of 100ms (255 is the highest allowed value)
    }

    $lakrits.deliver msg
  end

  get '/app.css' do
    scss :'stylesheets/app'
  end


end
