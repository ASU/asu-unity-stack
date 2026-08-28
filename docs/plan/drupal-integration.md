# Priority 5: Webspark/Drupal Integration (SDC Validation)

**Goal:** Twig templates become simple `<uds-*>` wrappers. No markup recreation.

## Drupal Single Directory Components (SDC)

Webspark is adopting Drupal's **Single Directory Components** (SDC) pattern — also referred to as "Drupal Canvas compatibility" in the charter. SDC is Drupal core's component architecture (introduced in Drupal 10.3+) where each component lives in a self-contained directory:

```
components/
└── uds-button/
    ├── uds-button.component.yml   ← metadata, props schema, library deps
    ├── uds-button.html.twig       ← template (thin wrapper around web component)
    └── uds-button.css             ← optional scoped styles (minimal with WC)
```

**Why this matters for us:** Our Lit web components map directly to SDC's model. Each `<uds-*>` tag becomes one SDC. The Twig template is trivially thin because the web component encapsulates all markup, styles, and behavior.

### SDC Component Definition Example

```yaml
# uds-button.component.yml
name: UDS Button
status: stable
props:
  type: object
  properties:
    label:
      type: string
      title: Label
      description: Button text
    color:
      type: string
      title: Color
      enum: [primary, secondary, gold]
      default: primary
    href:
      type: string
      title: URL
      description: Makes the button a link
    disabled:
      type: boolean
      default: false
slots:
  default:
    title: Content
    description: Optional content override
libraryOverrides:
  dependencies:
    - unity_core/unity-core.button
```

```twig
{# uds-button.html.twig — the entire template #}
<uds-button
  label="{{ label }}"
  color="{{ color|default('primary') }}"
  {% if href %}href="{{ href }}"{% endif %}
  {% if disabled %}disabled{% endif %}
>
  {% block content %}{% endblock %}
</uds-button>
```

### How UDS Web Components + SDC Fit Together

| Layer | Responsibility |
|---|---|
| `@asu/unity-core` (our package) | Component logic, styles, behavior (Lit web component) |
| Drupal SDC (Webspark) | Props schema, Twig wrapper, library declaration |
| Drupal library YAML | Loads the correct JS/CSS from unity-core dist |

The SDC `props` schema and our component `properties` are the same data — SDC just declares them in YAML for Drupal's component API. We can auto-generate `*.component.yml` from our frontmatter/meta.json.

## Before vs. After

```twig
{# BEFORE: Manually recreated markup + Bootstrap classes + Drupal.behaviors init #}
<div class="accordion" id="accordion-{{ id }}">
  {% for item in items %}
    <div class="accordion-item">
      <button class="accordion-button collapsed" data-bs-toggle="collapse">
        {{ item.title }}
      </button>
      <div class="accordion-collapse collapse">
        {{ item.content }}
      </div>
    </div>
  {% endfor %}
</div>

{# AFTER: SDC wrapping a web component — no markup to recreate #}
<uds-accordion>
  {% for item in items %}
    <uds-accordion-item title="{{ item.title }}">
      {{ item.content }}
    </uds-accordion-item>
  {% endfor %}
</uds-accordion>
```

## Validation Approach

Per charter: "Validating this work against Webspark Single Directory Components (Drupal Canvas compatibility)"

- Each Lit component must work correctly when consumed as an SDC
- Pre-release testing in actual Webspark environment before declaring done
- Document the SDC pattern for Drupal team (component.yml + thin Twig)
- Validate that Drupal's component API (props, slots) aligns with our web component attributes/slots

## Tasks

- [ ] Define SDC directory structure pattern for UDS components
- [ ] Create first SDC (Button) in Webspark as POC
- [ ] Validate web component loading via Drupal library YAML + SDC
- [ ] Auto-generate `*.component.yml` from component frontmatter/meta.json
- [ ] Test SSR compatibility (@lit-labs/ssr / declarative shadow DOM if needed)
- [ ] Document SDC migration path for Drupal team
- [ ] Coordinate breaking change communication
- [ ] Validate that SDC props schema matches component properties

## Dependencies

- P2 (Lit components must exist)
- Webspark team buy-in on SDC adoption

## Effort

Medium per component (coordination + validation)
