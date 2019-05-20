---
layout: page
---

<div class="cv">
    <div class="skills aside">
        {%- for skillLevel in page.skillLevels -%}
        <div>
            <h3>{{ skillLevel.level }}</h3>
            <ul>
                {%- for skill in skillLevel.skills -%}
                <li>{{ skill }}</li>
                {%- endfor -%}
            </ul>
        </div>
        {%- endfor -%}
    </div>
    <div class="main_body">
        {{ content }}
    </div>
</div>