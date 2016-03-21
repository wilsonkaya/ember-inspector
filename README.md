[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# Ember Inspector

Now that you've seen a basic Ember application and have discussed all of the
 different components that go into it, let's look at a useful tool that will
 prove invaluable when you build your own applications, the Ember Inspector.

## Prerequisites

By now, you have already learned how to:

-   Create a new Ember application from the console.
-   Identify different parts of an Ember application and explain what they do.

## Objectives

By the end of this session, you should be able to:

-   Set up the Ember Inspector browser extension.
-   Get top-level information about the application using the Info tab.
-   Inspect an application's view states (along with associated Models
     and Templates) using the Inspector's "View Tree" tab.
-   Explore individual Routes using the "Routes" tab.
-   Look through the data store using the "Data" tab.
-   Identify possible deprecated code in your applications using the
     "Deprecations" tab.

## Preparation

1.  [Fork and clone](https://github.com/ga-wdi-boston/meta/wiki/ForkAndClone)
    this repository.
1.  Install dependencies with `npm install` and `bower install`.
1.  Install the Ember Inspector through the
     [Chrome Web Store](https://chrome.google.com/webstore/category/apps)
     (if you're using FireFox, you can download it as an [add-on](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)
     ).

## Using Ember Inspector

In order to get comfortable using Ember Inspector, we're going to use it to
 explore a working Ember app (included in this repo for your convenience).
The code for this application comes from
 [an example app](https://github.com/ember-cli/ember-cli-todos)
 produced by the ember-cli team.

Run `ember serve` to launch the application.
You should see a message in the console that looks like this:

```bash
Build successful - 9951ms.

Slowest Trees                                 | Total
----------------------------------------------+---------------------
ConcatWithMaps                                | 6567ms

Slowest Trees (cumulative)                    | Total (avg)
----------------------------------------------+---------------------
ConcatWithMaps (4)                            | 6622ms (1655 ms)
Babel (4)                                     | 1088ms (272 ms)
```

Open `http://localhost:4200` in your browser; you should see a page like this:

![Page](https://cloud.githubusercontent.com/assets/3653013/13907186/b166c04c-eebe-11e5-8d9d-46c143e02c15.png)

Finally, open Ember Inspector; in Chrome, you do this by opening the Chrome
 Inspector and going to the tab labelled 'Ember'.

### Info Tab

![Info](https://cloud.githubusercontent.com/assets/3653013/13907190/bf7dec64-eebe-11e5-849e-8afd872a2394.png)

The info tab is where you can find version information for the key libraries in
 your Ember application (Ember, Ember Data, jQuery) as well as the version of
 Ember Inspector itself.

### View Tree Tab

![View Tree](https://cloud.githubusercontent.com/assets/3653013/13907193/cd7e40ca-eebe-11e5-8af1-962f6b527b53.png)

The 'View Tree' tab shows all of the view states in your application.
A view state is an abstraction representing a possible way that the screen can
 look; in the context of an Ember application, a view state is represented by a
 Route and a Template.
A typical application might have a large number of different Routes and view
 states, nested in a tree-like fashion based on their URLs.

This particular app only has one view state, `application`, so we can't see that
 tree structure very easily.
However, if we check the 'Components' box, suddenly a tree structure appears!
Even though there are no other view states inside `application`, `application`
 _does_ contain multiple Ember Components, each with its own template.

If you click one of the cells in the 'View/Component' column, it will pop up a
 sidebar on the right displaying all of the properties for that particular
 top-level template or Component.

See the `>$E` thing on the right side of the cells in the 'Model', 'Controller',
 and 'View/Component' columns?
That link will take the entity referenced in that cell and make it available in
 the console, inside a variable called `$E`.
For instance, if click the `>$E` in the Model column, you can run the following
 script in the console to print out the names of all the tasks in the list.

`$E.all.forEach(function(todo){console.log(todo.get('title'))})`

Take note that these entities usually have a _lot_ of properties and
 methods, most of which you don't ever manipulate directly - they're part of
 the inner machinery of how Ember works.

### Routes Tab

![Routes](https://cloud.githubusercontent.com/assets/3653013/13907194/dd607e2c-eebe-11e5-85d9-01cbcf429ede.png)

The 'Routes' tab allows you to look at all of the routes in your application
 that users can hit.
This includes routes that were auto-generated by Ember, such as
 'application_loading' and 'application_error'.

> '\_loading' and '\_error' are a special kinds of view states called
> 'sub-states'; they're what the users see when transitioning between pages.
> By default, if you don't specify Templates to sit at those Routes, the app
> will show the current view state until the next view state is fully loaded
> (or there is an error).

Much of this content is similar to the content that you can see on the
 'View Tree' tab.
However, it's worth noting that Route Objects are _only_ visible on the 'Routes'
 tab, while Models are _not_ directly visible.

Similar to the 'View Tree' tab, the 'Routes' tab allows us to zoom in on Route
 Objects and Controllers via a sidebar on the right.

### Data Tab

![Data](https://cloud.githubusercontent.com/assets/3653013/13907195/ed059ad8-eebe-11e5-8106-99d7b1299c74.png)

The 'Data' tab is a very useful one - it shows every model instance that'd been
 created by your application (split up by Model) along with all of its
 properties.
Naturally, this is very useful for making sure that your data all look correct.

### Deprecations Tab

![Deprecations](https://cloud.githubusercontent.com/assets/3653013/13907197/fccb2aa0-eebe-11e5-9816-7d940f9407b8.png)

The 'Deprecations' tab functions as a sort of linter for your Ember code, giving
 you warnings about particular expressions, idioms, or tools that will soon be
 phased out.
Since Ember is a fairly new framework (initially released in December 2011),
 updates are common, so being able to keep tabs on the differences between one
 version of Ember and the next is very important.

## Lab : Explore the Ember Inspector

Take the next 15 minutes to play around with this app in the Ember Inspector.
If you notice anything interesting, write it down - we'll take five minutes to
 share out to the rest of the class at the end of the exercise.

## Additional Resources

-   [Source code for Ember Inspector](https://github.com/emberjs/ember-inspector)

## [License](LICENSE)

Source code distributed under the MIT license. Text and other assets copyright
General Assembly, Inc., all rights reserved.
