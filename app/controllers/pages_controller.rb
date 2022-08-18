class PagesController < ApplicationController
  def home
    render inertia: "home", props: { name: "World" }
  end
end
