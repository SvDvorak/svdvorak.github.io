---
layout: page
show_title: false
full_width: true
---

<div class="layout--landing">
  <div class="abouts">
  {%- for _section in page.data.sections -%}
    <!-- {%- include snippets/get-nav-url.html path=_section.background_image.src -%} -->
    <!-- {%- assign _url = __return -%} -->
      <section class="about" id="hero-{{ forloop.index }}">
        <h1 class="about__title_top">{{ _section.title }}</h1>
        <div class="about__side">
        {%- for _sideImage in _section.sideImages -%}
          <img src="{{ _sideImage.url }}" />
        {%- endfor -%}
        </div>
        <div class="about__main">
          <h1 class="about__title_text">{{ _section.title }}</h1>
          {%- for paragraph in _section.paragraphs -%}
            <p>{{ paragraph }}</p>
          {%- endfor -%}
          {%- for _bottomImage in _section.bottomImages -%}
            <img src="{{ _bottomImage.url }}" />
          {%- endfor -%}
          <!-- {%- if _section.actions -%}
          <ul class="menu">
          {%- for _action in _section.actions -%}
            {%- include snippets/get-nav-url.html path=_action.url -%}
            {%- assign _url = __return -%}
            {%- assign _type = _action.type | default: 'outline-info' -%}
            <li><a class="button button--{{ _type }} button--pill button--lg" href="{{ _url }}">{{ _action.text }}</a></li>
          {%- endfor -%}
          </ul>
          {%- endif -%} -->
        </div>
      </section>
  {%- endfor -%}
  </div>
</div>

{{ content }}