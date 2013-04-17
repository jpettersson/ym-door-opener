require 'sinatra/base'
require 'haml'
require 'lakrits'

Lakrits::Log.level = Lakrits::Log::INFO
$lakrits = Lakrits.new

class Application < Sinatra::Base

  get '/' do
    haml :index
  end

  post '/' do
    open_door
    haml :index
  end

  def open_door
    puts "Opening door"
    msg = { 
      :recipient_id => 2,  # The hard coded ID of the door opener Arduino.
      :message_type => 1,  # Sending an open command
      :data => [1]       # The duration of the 'button press' in multiples of 100ms (255 is the highest allowed value)
    }

    $lakrits.deliver msg
  end

end
