# -*- coding: utf-8 -*-

require 'capybara/cucumber'
require 'capybara/poltergeist'

Capybara.javascript_driver = :poltergeist


もし(/^トップページを表示する$/) do
  visit 'http://jsapp1-shida.be-agile.jp/'
end

もし(/^"([^"]+?)"ボタンを押す$/) do |label|
  click_button(label)
end

ならば(/^"([^"]+?)"と表示されていること$/) do |text|
  assert page.has_content?(text)
end

ならば(/^"([^"]+?)"に"([^"]+?)"を選択する$/) do |from, field|
  select(field, :from => from)
end

ならば(/^次の通りの回答と答えとなること:$/) do |table|
  table.hashes.each do |hash|
    step %{"q1"に"#{hash['選択1']}"を選択する}
    step %{"q2"に"#{hash['選択2']}"を選択する}
    step %{"#{hash['答え']}"と表示されていること}
  end
end
