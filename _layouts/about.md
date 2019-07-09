---
layout: page
show_title: false
full_width: true
---

<div class="layout--landing">
  <div class="abouts">
  {%- for _section in page.data.sections -%}
      <section class="about" id="hero-{{ forloop.index }}">
        <h1 class="about__title_top">{{ _section.title }}</h1>
        <div class="about__side">
        {%- for _sideImage in _section.sideImages -%}
          <a href="{{ _sideImage.link }}"><img src="{{ _sideImage.image }}" /></a>
        {%- endfor -%}
        </div>
        <div class="about__main">
          <h1 class="about__title_text">{{ _section.title }}</h1>
          {%- for paragraph in _section.paragraphs -%}
            <p>{{ paragraph }}</p>
          {%- endfor -%}
          <div class="about__bottom">
            {%- for _bottomImage in _section.bottomImages -%}
              <a href="{{ _bottomImage.link }}"><img src="{{ _bottomImage.image }}" /></a>
            {%- endfor -%}
          </div>
        </div>
      </section>
  {%- endfor -%}
  </div>
</div>

{{ content }}